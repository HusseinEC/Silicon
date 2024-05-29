'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SignIn() {
    const router = useRouter()
    const [error, setError] = useState<string>('')
    const checkboxRef = useRef<HTMLInputElement | null >(null)
    const [signUpForm, setSignUpForm] = useState ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(data => ({...data, [e.target.name]: e.target.value}))
    }

    const handleSumbit = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        const res = await fetch ('', {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(signUpForm)
        })

        if (res.status === 200) {
            router.push("/confirm?email=" + signUpForm.email)
        } else {
            let result = await res.json()
            setError(result.error)
        }
    }

    return (
        <div className="signup">
            <div className="contianer">
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSumbit} noValidate>
                    <h1>Create account</h1>
                    <p>Already have an account? <Link href="/signin">Sign in here</Link></p>
                    <div className="form-content">
                        <div id="form-firstname" className="input-group">
                            <label>First name</label>
                            <input value={signUpForm.firstName} onChange={onChange} type="text" name="firstName"/>
                        </div>
                        <div id="form-lastname" className="input-group">
                            <label>Last name</label>
                            <input value={signUpForm.lastName} onChange={onChange} type="text" name="lastname"/>
                        </div>
                        <div id="form-email" className="input-group">
                            <label>Email</label>
                            <input value={signUpForm.email} onChange={onChange} type="text" name="email"/>
                        </div>
                        <div id="form-password" className="input-group">
                            <label>Password</label>
                            <input value={signUpForm.password} onChange={onChange} type="password" name="password"/>
                        </div>
                        <div id="form-confirmpassword" className="input-group">
                            <label>Confirm password</label>
                            <input value={signUpForm.confirmPassword} onChange={onChange} type="password" name="confirmpassword"/>
                        </div>
                        <div id="form-checkbox" className="checkbox-group">
                            <div className="input-group">
                                <input ref={checkboxRef} type="checkbox" name="terms"/>
                                <label>I accept the terms and conditions</label>
                            </div>
                        </div>
                        <div id="form-button">
                            <button type="submit" className="btn btn-theme"><i className="fa-regular fa-user"></i>Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}