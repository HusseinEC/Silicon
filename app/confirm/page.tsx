'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function AccountDetails() {
    const router = useRouter()
    const email = useSearchParams().get('email')
    const [error, setError] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            let form = {email, code}
            const res = await fetch ('', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if (res.status === 200){
                router.push("/signin")
            } else {
                let result = await res.json()
                setError(result.error)
            }
        }
        catch {
            setError('Something went wrong. Please try again later.')            
        }
    }

    return  (
        <div className="confirm">
            <div className="container">
            {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                    <h1>Confirm your account</h1>
                    <p>Didn't get a verifications code? <Link href="/resend">Resend here</Link></p>

                    <div className="form-content">
                        <div id="form-code" className="input-group">
                            <label>Verification code</label>
                            <input value={code} onChange={(e => setCode(e.target.value))} type="text" name="code" placeholder="Enter your verification code"/>
                        </div>
                        <div id="form-button">
                            <button type="submit" className="btn btn-theme"><i className="fa-regular fa-check"></i>Verify code</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
