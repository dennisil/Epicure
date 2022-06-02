import { useEffect, useState } from "react"

export const useForm = (initialState: any, cb = (fields: any) => { }) => {

    const [fields, setFields] = useState<any>(initialState)

    useEffect(() => {
        cb(fields)
    }, [fields])


    const handleChange = ({ target }:any) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFields((prevFields: any) => ({ ...prevFields, [field]: value }))
    }

    return [fields, handleChange, setFields]

}