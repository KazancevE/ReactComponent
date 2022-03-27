import {Component} from "react";
import "./addReview.css"
import infoSign from "./img/infoSign.png"

import reviewClose from "./img/reviueClose.png"








    class Modal extends Component {


        constructor(props) {
            super(props);
            this.close = this.close.bind(this);

            // let rev = [];
            // let review = {
            //     id: Date.now(),
            //     name: document.querySelector('modalInputName'),
            //     avatar: '',
            //     text: document.querySelector('modalInputReview'),
            // }


        }

        state = {

        }


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
                            <button className="modalBtn">+ Загрузите фото</button>

                        </form>
                        <p><strong>Все ли Вам понравилось?</strong></p>
                        <input className="modalInputReview" type="text" maxLength="200"
                               placeholder="Напишите пару слов о вашем опыте..."/>
                        <div className="modalFooter">
                            <button>Отправить отзыв</button>
                            <img src={infoSign} alt=""/>
                            <p>Все отзывы проходят модерацию в течение 2 часов</p>
                        </div>
                    </div>
                </div>
            )
        }
    }


export default Modal;