/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { EventLoopContext } from "$/utils/context"
import { Event, getRefValue, getRefValues, refs } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Form_2617d55ca91ba3969fab4f4a52c8a324 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_username = useRef(null); refs["ref_username"] = ref_username;
  const ref_password = useRef(null); refs["ref_password"] = ref_password;

  
    const handleSubmit_07240263eb8ff685ddec3eff249574cf = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["username"] : getRefValue(refs["ref_username"]), ["password"] : getRefValue(refs["ref_password"]) })};

        (((...args) => (addEvents([(Event("reflex___state____state.app___states___auth_state____auth_state.login", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
"form",
{className:"w-full",onSubmit:handleSubmit_07240263eb8ff685ddec3eff249574cf},
jsx(
"div",
{className:"w-full mb-4"},
jsx(
"label",
{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"username"},
"Usuario"
,),jsx("input",{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",id:"username",name:"username",placeholder:"admin",ref:ref_username,required:true},)
,),jsx(
"div",
{className:"w-full mb-6"},
jsx(
"label",
{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"password"},
"Contrase\u00f1a"
,),jsx("input",{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",id:"password",name:"password",placeholder:"admin",ref:ref_password,required:true,type:"password"},)
,),jsx(
"button",
{className:"w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg",type:"submit"},
"Login"
,),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
"main",
{className:"min-h-screen bg-gray-50 font-['Inter']"},
jsx(
"div",
{className:"container mx-auto flex flex-col items-center justify-center min-h-screen p-4 md:p-8"},
jsx(
"div",
{className:"bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-6 text-center"},
"Admin"
,),jsx(Form_2617d55ca91ba3969fab4f4a52c8a324,{},)
,),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"Admin Login"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
