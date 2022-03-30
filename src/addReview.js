import {Component} from "react";
import "./addReview.css"
import infoSign from "./img/infoSign.png"

import reviewClose from "./img/reviueClose.png"

import IDB from './IDB.js';




    class Modal extends Component {


        constructor(props) {
            super(props);
            this.close = this.close.bind(this);
            this.rev = this.rev.bind(this);


        }

        state = {

        }

        rev () {
            let inputName = document.querySelector('.modalInputName');
            console.log(inputName.value);
            let inputView = document.querySelector('.modalInputReview');
            console.log(inputView.value);
            let inputAva = document.querySelector('.modalBtnAdd');
            // console.log(inputAva.value);

            let revs = [];
            let review =  {
                id: Date.now(),
                name: inputName.value,
                avatar: inputAva.value,
                text: inputView.value,
            }
            console.log(revs)

            revs.push(review)
            console.log(revs)
        }

        // transfer = () => {
        //     if ()
        // }

        close () {
            console.log('clickClose');
            document.querySelector('.open').classList.add('close');
            document.querySelector('.open').classList.remove('open');
        }

        render() {
            return (
                <div className={`modalContain close`}>
                    <div className="modalFrame">
                        <div className="modalHeader">
                            <h2>Отзыв</h2>
                            <button onClick={this.close} ><img src={reviewClose}  alt=''/></button>
                        </div>
                        <p><strong>Как Вас зовут?</strong></p>
                        <form className="modalForm">
                            <input className="modalInputName" type="text" placeholder="Имя Фамилия"/>

                            <input style={{display: "none"}} id="modalBtnAdd" type="file"  />
                            <label className="modalBtn"
                                   name="avatar"
                                   htmlFor="modalBtnAdd"
                                   >+ Загрузите фото</label>

                        </form>
                        <p><strong>Все ли Вам понравилось?</strong></p>
                        <input className="modalInputReview" type="text" maxLength="200"
                               placeholder="Напишите пару слов о вашем опыте..."/>
                        <div className="modalFooter">
                            <button onClick={this.rev}>Отправить отзыв</button>
                            <img src={infoSign} alt=""/>
                            <p>Все отзывы проходят модерацию в течение 2 часов</p>
                        </div>
                    </div>
                </div>
            )
        }
    }


export default Modal;