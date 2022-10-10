import { useState } from 'react';

import { Button } from "react-bootstrap";
import PageBaseLayout from "./pageBaseLayout";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import translations from '../translations.json'
import getIconsByName from '../functions/getIconsByName';

export default function Start( { language }: { language: /*"en" | "es" |*/ "pt" } ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="font-[Jost] h-screen flex items-center justify-center overflow-hidden">
                { !show ?
                    <>
                    <div className="flex flex-column items-center">
                        <h3 className="text-white">
                            <b>{ translations.login[language] }</b>
                        </h3>
                        <div className="m-6">
                        <FloatingLabel
                            controlId="floatingInput"
                            label={ translations.email[language] }
                            className="mb-3 text-white"
                        >
                            <Form.Control className="!bg-white/25" type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel className="text-white" controlId="floatingPassword" label={ translations.password[language] }>
                            <Form.Control className="!bg-white/25" type="password" placeholder="Password" />
                        </FloatingLabel>
                        </div>
                        <Button className="!bg-[#02aae9] !border-[#02aae9]" onClick={handleShow}>
                            <div className="flex items-center uppercase">
                                { getIconsByName('bi', 'BiLogInCircle') } &nbsp; { translations.signin[language] }
                            </div>
                        </Button>
                    </div>
                    </>
                    :
                    <></>
                }
                <PageBaseLayout show={show} type='side' county={undefined} />
                <PageBaseLayout show={show} type='main' county={undefined} />
            </div>
        </>
    );
}