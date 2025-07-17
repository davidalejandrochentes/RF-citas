import { createContext, useContext, useMemo, useReducer, useState, createElement } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.app___states___state____barber_state": {"admin_calendar_weeks": [[{"is_in_month": false}, {"day": 1, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-01", "is_disabled": true}, {"day": 2, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-02", "is_disabled": true}, {"day": 3, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-03", "is_disabled": true}, {"day": 4, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-04", "is_disabled": true}, {"day": 5, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-05", "is_disabled": true}, {"day": 6, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-06", "is_disabled": true}], [{"day": 7, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-07", "is_disabled": true}, {"day": 8, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-08", "is_disabled": true}, {"day": 9, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-09", "is_disabled": true}, {"day": 10, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-10", "is_disabled": true}, {"day": 11, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-11", "is_disabled": true}, {"day": 12, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-12", "is_disabled": true}, {"day": 13, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-13", "is_disabled": true}], [{"day": 14, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-14", "is_disabled": true}, {"day": 15, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-15", "is_disabled": true}, {"day": 16, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-16", "is_disabled": true}, {"day": 17, "is_in_month": true, "is_today": true, "is_selected": false, "date_str": "2025-07-17", "is_disabled": false}, {"day": 18, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-18", "is_disabled": false}, {"day": 19, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-19", "is_disabled": false}, {"day": 20, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-20", "is_disabled": false}], [{"day": 21, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-21", "is_disabled": false}, {"day": 22, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-22", "is_disabled": false}, {"day": 23, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-23", "is_disabled": false}, {"day": 24, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-24", "is_disabled": false}, {"day": 25, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-25", "is_disabled": false}, {"day": 26, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-26", "is_disabled": false}, {"day": 27, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-27", "is_disabled": false}], [{"day": 28, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-28", "is_disabled": false}, {"day": 29, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-29", "is_disabled": false}, {"day": 30, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-30", "is_disabled": false}, {"day": 31, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-31", "is_disabled": false}, {"is_in_month": false}, {"is_in_month": false}, {"is_in_month": false}]], "all_possible_times": ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"], "appointments": [], "availability_selected_barber_id": "", "availability_selected_date": "", "availability_selected_times": [], "available_times_for_selected_date_and_barber": [], "barber_names": [], "barbers": [], "calendar_weeks": [[{"is_in_month": false}, {"day": 1, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-01", "is_disabled": true}, {"day": 2, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-02", "is_disabled": true}, {"day": 3, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-03", "is_disabled": true}, {"day": 4, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-04", "is_disabled": true}, {"day": 5, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-05", "is_disabled": true}, {"day": 6, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-06", "is_disabled": true}], [{"day": 7, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-07", "is_disabled": true}, {"day": 8, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-08", "is_disabled": true}, {"day": 9, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-09", "is_disabled": true}, {"day": 10, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-10", "is_disabled": true}, {"day": 11, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-11", "is_disabled": true}, {"day": 12, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-12", "is_disabled": true}, {"day": 13, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-13", "is_disabled": true}], [{"day": 14, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-14", "is_disabled": true}, {"day": 15, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-15", "is_disabled": true}, {"day": 16, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-16", "is_disabled": true}, {"day": 17, "is_in_month": true, "is_today": true, "is_selected": false, "date_str": "2025-07-17", "is_disabled": true}, {"day": 18, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-18", "is_disabled": true}, {"day": 19, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-19", "is_disabled": true}, {"day": 20, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-20", "is_disabled": true}], [{"day": 21, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-21", "is_disabled": true}, {"day": 22, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-22", "is_disabled": true}, {"day": 23, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-23", "is_disabled": true}, {"day": 24, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-24", "is_disabled": true}, {"day": 25, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-25", "is_disabled": true}, {"day": 26, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-26", "is_disabled": true}, {"day": 27, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-27", "is_disabled": true}], [{"day": 28, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-28", "is_disabled": true}, {"day": 29, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-29", "is_disabled": true}, {"day": 30, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-30", "is_disabled": true}, {"day": 31, "is_in_month": true, "is_today": false, "is_selected": false, "date_str": "2025-07-31", "is_disabled": true}, {"is_in_month": false}, {"is_in_month": false}, {"is_in_month": false}]], "display_month_date": "2025-07-17", "display_month_str": "Julio 2025", "editing_item_id": "", "editing_item_name": "", "editing_item_price": 0, "filter_date": "", "filter_name": "", "filter_phone": "", "filter_service": "", "filtered_appointments": [], "globally_available_dates": [], "new_barber_name": "", "new_service_name": "", "new_service_price": 0, "pending_appointment_data": {}, "selected_barber": "", "selected_date": "", "selected_time": "", "services": [], "show_confirm_dialog": false, "show_edit_barber_dialog": false, "show_edit_service_dialog": false, "sorted_appointments": [], "spanish_months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], "week_days": ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"]}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.app___states___auth_state____auth_state": {"is_logged_in": false}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__app___states___state____barber_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__app___states___auth_state____auth_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-07-17 10:36:29.648167"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(UploadFilesContext, {value:[filesById, setFilesById]}, children);
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(EventLoopContext, {value:[addEvents, connectErrors]}, children);
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__app___states___state____barber_state, dispatch_reflex___state____state__app___states___state____barber_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___state____barber_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__app___states___auth_state____auth_state, dispatch_reflex___state____state__app___states___auth_state____auth_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___auth_state____auth_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.app___states___state____barber_state": dispatch_reflex___state____state__app___states___state____barber_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.app___states___auth_state____auth_state": dispatch_reflex___state____state__app___states___auth_state____auth_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
    createElement(StateContexts.reflex___state____state__app___states___state____barber_state,{value: reflex___state____state__app___states___state____barber_state},
    createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
    createElement(StateContexts.reflex___state____state__app___states___auth_state____auth_state,{value: reflex___state____state__app___states___auth_state____auth_state},
    createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
    createElement(DispatchContext.Provider, {value: dispatchers}, children),
))))))  )
}