/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight } from "lucide-react"
import { jsx } from "@emotion/react"




export function Button_70a48297308ae33ca05188f23feac1ce () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bbd51f1c91224877654c5e8e3e62e38f = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.change_month", ({ ["delta"] : -1 }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"p-2 rounded-md hover:bg-gray-100",onClick:on_click_bbd51f1c91224877654c5e8e3e62e38f,type:"button"},
jsx(LucideChevronLeft,{},)
,)
  )
}

export function H3_08c94965a27fedb77161ab9bac7c626a () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
"h3",
{className:"font-semibold text-lg w-32 text-center"},
reflex___state____state__app___states___state____barber_state.display_month_str
,)
  )
}

export function Button_6a57e89901a48b4d802108bdfb9233d9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4d1195792cd8fb349de64d41a69ee466 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.change_month", ({ ["delta"] : 1 }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"p-2 rounded-md hover:bg-gray-100",onClick:on_click_4d1195792cd8fb349de64d41a69ee466,type:"button"},
jsx(LucideChevronRight,{},)
,)
  )
}

export function Button_e9103df4ff84eeb5c28bb028a5a2ed7c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0ae27cb837d943d571c88dfa1388075b = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.close_edit_dialogs", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"px-4 py-2 bg-gray-200 rounded-lg",onClick:on_click_0ae27cb837d943d571c88dfa1388075b,type:"button"},
"Cancelar"
,)
  )
}

export function Div_c3ae72ebe77fdb36c48f8edaba7f0aa1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0ae27cb837d943d571c88dfa1388075b = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.close_edit_dialogs", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",onClick:on_click_0ae27cb837d943d571c88dfa1388075b},)

  )
}
