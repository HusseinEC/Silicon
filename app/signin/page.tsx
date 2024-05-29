'use client';

import Link from "next/link";
import { useFormState } from "react-dom";
import signInAction from "./signInAction";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn() {
    const [signInForm, setSignInForm] = useFormState(signInAction, {success: false})
    const router = useRouter()

    useEffect(() => {
        if (signInForm.success) {
            router.push('/account/details')
        }
    }, [signInForm])

    return (
        <div className="signin">
            <div className="container">
                    {signInForm?.error && <div className="alert alert-danger">{signInForm?.error}</div>}
                    <form action={setSignInForm} noValidate>
                        <h1>Welcome back</h1>
                        <p>Don't have an account yet? <Link href="/signup">Sign up here</Link></p>
                        <div className="form-content">
                            <div id="form-email" className="input-group">
                                <label>Email</label>
                                <input type="text" name="email"/>
                            </div>
                            <div id="form-password" className="input-group">
                                <label>Password</label>
                                <input type="password" name="password"/>
                            </div>
                            <div id="form-checkbox" className="input-group">
                                <div className="input-group">
                                    <input type="checkbox" name="isPersistent"/>
                                    <label>Remember me</label>
                                </div>
                            </div>
                            <div id="form-button">
                                <button type="submit" className="btn btn-theme"><i className="fa-regular fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
}