import { useState } from 'react';

import useSWR from "swr";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import { CountyDTO } from "../pages/api/counties";

import getIconsByName from "../functions/getIconsByName";
import PageBaseLayout from './pageBaseLayout';

export default function CountyList(/* { language }: { language: "en" | "es" | "pt" } */) {
    const [county, setCounty] = useState(false);
    
    const handleCloseCounty = () => setCounty(false);
    const handleCounty = () => setCounty(true);

    const [index, setIndex] = useState(0);

    const handleIndex = (i: number) => { setIndex(i); setCounty(true) };
    
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: counties, error } = useSWR<CountyDTO[]>(
        "/api/counties",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!counties) return <div>loading...</div>;

    return (
        <>
        <Container>
        <div className="flex items-end mb-6">
            <div className="bg-[#7dc523] rounded-full p-3 text-white">{ getIconsByName('fa', 'FaThList', '32px') }</div>
            <h2 className="ml-4 p-2 rounded bg-[#40d9f1] text-white uppercase tracking-wider font-semibold">Lista de Município Consorciados</h2>
        </div>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Buscar Município por Nome"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                { getIconsByName('ri', 'RiSearchLine') }
            </Button>
        </InputGroup>
            <Table striped>
                <thead>
                    <tr>
                    <th>Nº</th>
                    <th>Nome do Município</th>
                    <th>Responsável</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    { counties.map((c, i) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                    <td>{ i + 1 }</td>
                                    <td>{ c.county.name }</td>
                                    <td>{ c.accountable.name }</td>
                                    <td>
                                        <Button variant="secondary" className="!rounded-full !p-[6px]" onClick={ /* alert(JSON.stringify(counties)) handleCounty,*/ () => handleIndex(i) }>{ getIconsByName('ri', 'RiEyeFill') }</Button> &nbsp;
                                        <Button variant="secondary" className="!rounded-full !p-[6px]" onClick={ /* alert(JSON.stringify(counties)) handleCounty,*/ () => handleIndex(i) }>{ getIconsByName('ri', 'RiEditBoxFill') }</Button>
                                    </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    {/* <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
            </Container>
            <PageBaseLayout show={ county } type="profile" county={ counties[index] } />
        </>
    );
}