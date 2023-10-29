'use client'
import React from 'react'

function Subsection() {
  return (
    <div
                className="outline-content subs_news__section mt-16 relative px-4 py-8 before:content-[''] before:block before:bg-[#2f4d4b] before:translate-y-[-30px] before:h-[1px] before:w-full after:content-[''] after:absolute after:block after:bg-[#2f4d4b] after:left-0 after:bottom-0 after:h-[50%] after:w-full after:z-0
            md:px-12
            "
            >
                <div className="subs_news__content relative z-[1] py-8 px-5 md:px-8 bg-[#faf7f2]">
                    <h4 className="subs_news__title m-0 font-[Cinzel] text-lg leading-6 text-[#2f4d4b] text-center md:text-4xl">subscribe to our newsletter</h4>
                    <div className="text_appear down show overflow-hidden">
                        <p className="subs_news__text mt-5 mx-0 mb-0 text-center text-xs leading-5 tracking-normal text-[#2f4d4b] md:text-sm md:leading-6">
                            Stay up to date on our latest event and new additions to Banquet Bazzar. We promise not to spam you with emails, but provide valuable
                            information to you and fill you in on any updates we may have for our current and future clients. Sign up for our newsletter below!
                        </p>
                    </div>
                    <form className="subs_news__form">
                        <div className="MuiFormControl-root MuiTextField-root subs_news__input mt-1 w-full border-0 m-0 inline-flex relative p-0 flex-col align-top">
                            <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required top-0 left-0 absolute translate-x-0 translate-y-6 scale-100 block origin-top-left text-[#0000008a] p-0 text-base font-normal leading-normal tracking-[0.0098]"
                                data-shrink="false"
                            >
                                Enter your email
                                <span
                                    aria-hidden="true"
                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk text-[#0000008a] p-0 text-base font-normal leading-normal tracking-[0.0098]"
                                >
                                    {/* */}*
                                </span>
                            </label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl mt-4 relative text-[#0000008a] p-0  font-normal leading-normal tracking-[0.0098] items-center cursor-text inline-flex text-base before:content-['\00a0'] before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:border-[#0000006b] before:pointer-events-none after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b after:border-[#0000006b] after:pointer-events-none after:scale-x-0">
                                <input
                                    type="email"
                                    aria-invalid="false"
                                    required
                                    className="MuiInputBase-input MuiInput-input  width-full border-0 h-[1.1876em] m-0 block pt-2 px-0 pb-2 min-w-0 bg-none box-content tracking-normal"
                                    style={{ background: "none" }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="button subs_news__btn max-w-[21.5rem] " style={{ marginTop: "20px" }}>
                            subscribe
                        </button>
                    </form>
                    <div className="subs_news__form mt-4 block" />
                </div>
            </div>
  )
}

export default Subsection