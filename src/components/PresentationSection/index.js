import React from "react"
import "./PresentationSection.css"
import { Button } from "../ButtonElements";

function PresentationSection(){
    return(
        <div className="pres-container">
            <h1><b>БухКом</b>Сервис</h1>
            <h2>Бухгалтерские</h2>
            <h2><b>Услуги</b></h2>
            <div className="pres-btns">
                <Button fontBig big primary>
                    Оставить заявку
                </Button>
            </div>
        </div>
    )
}

export default PresentationSection