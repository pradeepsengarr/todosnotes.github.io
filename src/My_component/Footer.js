import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"100vh",
        width:"100%",
        border:"2px solid red"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; pradeepsengarr
            </p>
        </footer>
    )
}
