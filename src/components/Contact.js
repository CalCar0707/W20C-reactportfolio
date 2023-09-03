import React from "react";

export default function Contact() {
    return (
        <div name='contact' className="w-full h-screen flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/cba3d8f0-bee2-4310-b0ab-fb901d98d12b" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4">Contact</p>
                    <p className="py-4">Submit the form below or reach out via email- callienicole0419@gmail.com</p>
                </div>
                <input type="text" placeholder="Name" name="email" />
                <input className="my-4 p-2" type="email" placeholder="Email" name="email" />
                <textarea className="p-2" name="message" rows="10" placeholder="Message"></textarea>
                <button className="border-2 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>


        </div>

    )
}