import {Component} from "react";
import './AppBody.css';
import myPhoto from "./img/myPhoto.jpg";
import Modal from "./addReview";


// function review () {
//     document.getElementsByClassName('modalContain').classList.add('open');
//     document.getElementsByClassName('modalContain').classList.remove('close');
//     console.log('open');
// }

// function reviewAdd () {
//     document.getElementsByClassName('modalContain').classList.add('open');
//     document.getElementsByClassName('modalContain').classList.remove('close');
//     console.log('open');
// }



class general extends Component{
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
    }
    open () {
        console.log('click');

        document.querySelector('.close').classList.add('open');
        document.querySelector('.close').classList.remove('close');
    }


    render() {

        return (

            <div className="general">

                <h1>Добро пожаловать <br/>в академию!</h1>
                <div className="generalBody">
                    <img className="generalImg" src={myPhoto} alt=""/>
                    <div className="block">
                        <div className="blockTitle"><h3>Егор Казанцев</h3> <p>27.05.1996</p></div>
                        <div className="blockInfo">
                            <p><strong>Город:</strong> Томск</p>
                            <p><strong>Пол:</strong> Мужской</p>
                            <p><strong>Возраст:</strong> 25</p>
                        </div>
                        <div className="blockMySelf">
                            <p><strong>О себе:</strong>Добрый день! Меня зовут Егор, мне 25 лет.
                                Самообучаюсь на программиста, давно хочется войти в IT.
                                Прохожу курсы на HTMLAcademy и JavaScriptLearn. так же в обучении пользуюсь YouTube.
                                Имею огромное желание развиться в этой сфере.</p>
                        </div>
                        <div className="blockOther"><p><strong>Домашнее животное:</strong> Нет, но очень хочется:)</p></div>
                    </div>
                </div>
                   <div className="rev">
                       <div className="reviews">
                           <div className="reviewsHead">
                                <h3>Отзывы</h3>
                                <button className="reviewsAdd" onClick={this.open}>+ Добавить отзыв</button>
                           </div>
                           <div className="revSlider"/>
                       </div>

                       <button className="btnLeft"> <p/></button>
                       <button className="btnRight"> <p/></button>
                   </div>
                <Modal id='modalContain' className={'close'}/>
            </div>
        )
    }
}

export default general;