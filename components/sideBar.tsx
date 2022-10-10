import { useState } from "react";
import { Button } from "react-bootstrap";
import getIconsByName from "../functions/getIconsByName";

export default function SideBar(/* { language }: { language: "en" | "es" | "pt" } */) {
    const [side, setSide] = useState(false);

    const handleCloseSide = () => setSide(false);
    const handleSide = () => setSide(true);

    const [main, setMain] = useState(false);

    const handleCloseMain = () => setMain(false);
    const handleMain = () => setMain(true);

    return (
        <>
            <div className="flex flex-column">
                <Button className="hover:!bg-[#02aae9] border-0 !rounded-full !p-[12px]" variant="outline-secondary" onClick={ handleSide }>{ getIconsByName('fa', 'FaCity', '32px') }</Button> &nbsp;
                <Button className="hover:!bg-[#02aae9] border-0 !rounded-full !p-[12px]" variant="outline-secondary" onClick={ handleMain }>{ getIconsByName('fa', 'FaThList', '32px') }</Button>
            </div>
        </>
    );
}