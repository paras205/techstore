import React from 'react'
import Title from '../Title';
export default function contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us"></Title>
                    <form className="mt-5" action="https://formspree.io/parasojha258@gmail.com" method="POST">
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="john smith" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="email@email.com" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important!!!" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" placeholder="write a message" style={{ height: "200px" }} />
                        </div>
                        <div className="form-group mt-5">
                            <input type="submit" value="send" className="form-control bg-primary text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
