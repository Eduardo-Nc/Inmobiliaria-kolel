import React, { useState, Fragment, useEffect } from 'react';
import './botonChatbot.css';
import ChatBot from 'react-simple-chatbot';
import NavLogo6 from '../../../src/imagenes/NavLogo6.png'
import axios from 'axios';
import Swal from 'sweetalert2';




const BotonChatbot = () => {

    const baseUrl = window.$baseUrl;

    const [enviado, setEnviado] = useState(false);
    const [open, setOpen] = useState(false);
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');


    const handleEnd = async ({ steps, values }) => {


        setTimeout(() => {
            setOpen(false)
        }, 5000)


        setEnviado(true)

        await axios.post(baseUrl + '/api/contacto/chatBot', {
            nombre,
            numero,
            pregunta: values[1] === 1 ? "Quiero hablar con un asesor" : "Quiero una cotización"
        }).then(response => {
            setEnviado(false);

            console.log("Datos chat enviados")
        }).catch(e => {
            console.log(e);
        });

    }

    const steps = [
        {
            id: '1',
            message: '¡Hola! Soy Balam, tu asistente virtual, ¿Me podrías proporcionar su nombre completo?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            validator: (value) => {
                if (value.length === 0) {
                    return 'Ingrese su nombre completo';
                } else {
                    setNombre(value);
                    return true;
                }
            },
            trigger: '3',
        },
        {
            id: '3',
            message: 'Hola {previousValue}, Muchas gracias por ponerte en contacto con nosotros.',
            trigger: '4'
        },
        {
            id: '4',
            message: 'Por favor selecciona una opción para brindarte la información necesaria.',
            trigger: '5'
        },
        {
            id: '5',
            options: [
                { value: 1, label: 'Quiero hablar con un asesor', trigger: '6' },
                { value: 2, label: 'Quiero una cotización', trigger: '6' },
            ],
        },
        {
            id: '6',
            message: 'Muy bien, para poder brindarte una mejor experiencia',
            trigger: '7',
        },
        {
            id: '7',
            message: 'Ingrese su número telefónico',
            trigger: '8',
        },
        {
            id: '8',
            user: true,
            validator: (value) => {
                if (isNaN(value)) {
                    return 'El valor debe ser un numero';
                } else {
                    setNumero(value);
                    return true;
                }
            },
            trigger: '9',
        },
        {
            id: '9',
            message: 'Muchas gracias, el número ingresado fue: {previousValue}, ¿Es correcto?',
            trigger: '10'
        },
        {
            id: '10',
            options: [
                { value: 1, label: 'Sí', trigger: '11' },
                { value: 2, label: 'No', trigger: '7' },
            ],
        },
        {
            id: '11',
            message: 'Muchas gracias, nos pondremos en contacto con usted lo antes posible.',
            end: true,
        },
    ]


    return (
        <Fragment>

            <div className="content-principal-chatbot">
                <div style={{ display: open ? 'flex' : 'none' }} className="cont-sec-chatbot">
                    <ChatBot
                        // headerTitle=""
                        // recognitionEnable={true}                        
                        placeholder="Escribe tu mensaje"
                        handleEnd={handleEnd}
                        botAvatar={NavLogo6}
                        steps={steps}
                    />
                </div>
                <div data-aos="fade-left" onClick={() => { setOpen(!open) }} className="btn-chat-bot">
                    <img src={NavLogo6} />
                </div>
            </div>

        </Fragment>
    )
}


export default BotonChatbot;