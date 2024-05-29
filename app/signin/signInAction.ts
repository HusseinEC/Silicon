'use server';

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error?: string | undefined
}

export default async function signInAction(currentState: any, formData: FormData) : Promise<ActionTypes> {
    const email = formData.get('email')
    const password = formData.get('password')
    const isPersistent = formData.get('isPersistent')

    const signInFromData = {email, password, isPersistent: isPersistent ? isPersistent : false}

    try {
        const res = await fetch('', {
            method: 'post',
            headers: {
                'content-type': 'appliction/json'
            },
            body: JSON.stringify(signInFromData)
        })

        if (res.status === 200) {
            const result = await res.json()

            cookies().set('Authorization', result.token, {
                secure: true,
                httpOnly: true,
                expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
                path: "/",
                sameSite: 'strict'
            })
            return {success: true}
        } else {
            const result = await res.json()
            return {success: false, error: result.error}
        }
    }
    catch {
        return {success: false, error: "unable to sign in   right now. Please try again later."}
    }
}