import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Button} from "../components/ButtonElements";

const Services = () => (
 <div className="serv-container">
    <h1>Возьмем на себя:</h1>
    <h2>Бухгалтерские</h2>
    <h2><b>Услуги</b></h2>
    <div className="pres-btns">
        <Button fontBig big primary>
            Оставить заявку
        </Button>
    </div>
</div>
)

export const Head = () => <Seo title="Услуги" />

export default Services
