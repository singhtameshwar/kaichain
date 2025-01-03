import "./material.autocomplete.typeable.scss";
import React, { useEffect, useRef, useState } from "react";
import useAutocomplete from "@mui/lab/useAutocomplete";
import InputBase from "@mui/material/InputBase";
import { useStyles } from "./material.autocomplete.typeable.style";
import { Paper, IconButton } from "@mui/material";
import clsx from "clsx";

import {
    LinearProgress,
    Popper,
    ClickAwayListener,
    Icon,
    Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function MaterialAutoCompleteTypeable(props) {
    const {
        data,
        placeholder,
        actionType,
        error,
        selectedItem,
        endAdornment,
        topAdornment,
        placement,
        startAdornment,
        disabled,
        showAddButton,
        ref,
        iconSrc,
        execStatus
    } = props;
    let selectedItm;
    if (selectedItem)
        selectedItm =
            data && data.find((item) => item.value === selectedItem.value);
    const classes = useStyles();
    const autoCompleteRef = useRef();
    const [state, setState] = useState({
        anchorELe: false,
        open: false,
        inputValue: selectedItm && selectedItm.name,
        autoCompleteWidth: false,
    });
    useEffect(() => {
        if (
            autoCompleteRef &&
            autoCompleteRef.current &&
            autoCompleteRef.current !== null &&
            autoCompleteRef.current.offsetWidth !== null
        ) {
            setTimeout(() => {
                if (
                    autoCompleteRef &&
                    autoCompleteRef.current &&
                    autoCompleteRef.current !== null &&
                    autoCompleteRef.current.offsetWidth !== null
                ) {
                    if (autoCompleteRef.current.offsetWidth != state.autoCompleteWidth)
                        setState({
                            ...state,
                            autoCompleteWidth: autoCompleteRef.current.offsetWidth,
                        });
                }
            }, 200);
        }
    }, [autoCompleteRef, execStatus]);
    useEffect(() => {
        if (selectedItm && selectedItm.name) {
            setState({ ...state, inputValue: selectedItm.name });
        }
        else {
            setState({ ...state, inputValue: "" });
        }
    }, [selectedItm, selectedItem]);
    const onOpen = (event) => {
        if (props.disabled === true) {
        } else {
            if (state.open === true) {
                setState({ ...state, anchorELe: false, open: false });
            } else setState({ ...state, anchorELe: event.currentTarget, open: true });
        }
    };

    const closePopper = () => {
        setState({ ...state, open: false });
    };

    const open = Boolean(state.anchorELe) && state.open === true;

    // const onMobileChange = (e, data) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     setState({ ...state, open: false, anchorELe: false, inputValue: data && data.name })
    //     if (props.disabled === true) {

    //     }
    //     else {
    //         props.onChange(data ? data.value : null, { ...data });
    //     }
    // }

    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: "material-autocomplete-typeable",
        options: data,
        open: open,
        openOnFocus: true,
        freeSolo: true,
        onInputChange: (event, value) => {
            if (!props.disabled) {
                if (event !== null) {
                    if (value === "") props.onChange(null, null);
                    setState({
                        ...state,
                        open: true,
                        anchorELe: event.currentTarget,
                        inputValue: value
                    });
                }
                else {

                }
            }
        },
        value: selectedItem && selectedItem.value ? selectedItem.value : "",
        onChange: (event, data, detail) => {
            if (props.disabled === true) {
            } else {
                setState({
                    ...state,
                    open: false,
                    anchorELe: false,
                    inputValue: data && data.name,
                });
                if (event.key === "Enter") {
                    if (groupedOptions && groupedOptions[0]) {
                        props.onSelect({ ...data });
                    }
                } else props.onSelect({ ...data });
            }
        },
        getOptionLabel: (option) => {
            if (option.name)
                return option.name;
            else
                return ""
        },
    });
    return (
        <React.Fragment>
            <div className="w-100">
                <div className="d-flex w-100 justify-content-between label flex-wrap">
                    {topAdornment ? (
                        <Typography classes={{ root: classes.textColor }} variant="body2" className="max-width-content">
                            <label htmlFor="text-field" className="">
                                {topAdornment}
                            </label>
                        </Typography>
                    ) : (
                        ""
                    )}
                    {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
                </div>
                {execStatus && !data ? (
                    <div className="">
                        <div className="d-flex paper-root justify-content-center p-1">
                            <LinearProgress className="p-2" size={30} />
                        </div>
                    </div>
                ) : data && data.length == 0 && execStatus ?
                    <div className="">
                        <div className="d-flex paper-root justify-content-center p-1">
                            <LinearProgress className="p-2" size={30} />
                        </div>
                    </div> : ""
                }
                {data && data.length > 0 ? (
                    <ClickAwayListener onClickAway={closePopper}>
                        <div
                            className="w-100 d-flex justify-content-center align-items-center position-relative"
                            {...getRootProps()}
                        >
                            <div
                                ref={autoCompleteRef}
                                id="paper-autocomplete"
                                onClick={onOpen}
                                component="div"
                                className={clsx(
                                    "d-flex align-items-center cursor-pointer",
                                    state.open && classes.borderRadiusPartial,
                                    !state.open && classes.borderRadiusFull,
                                    classes.paperRoot
                                )}
                            >
                                {startAdornment ? <div>{startAdornment}</div> : null}
                                {selectedItm && selectedItm.img ? (
                                    <Paper className="svg-logo" elevation={1}>
                                        <img
                                            className="svg-logo"
                                            src={`${process.env.PUBLIC_URL}/assets/images/${selectedItm.img}`}
                                        />
                                    </Paper>
                                ) : null}
                                {selectedItm && selectedItm.svgLogo ? (
                                    <Paper
                                        className={clsx(
                                            "svg-logo",
                                            !startAdornment && "ms-1",
                                            startAdornment && "ms-2"
                                        )}
                                        elevation={3}
                                    >
                                        <Avatar
                                            className="svg-logo"
                                            alt={""}
                                            src={selectedItm.svgLogo}
                                        />
                                    </Paper>
                                ) : null}
                                <InputBase
                                    {...getInputProps()}
                                    inputRef={ref}
                                    autoFocus={open}
                                    placeholder={placeholder}
                                    onKeyDown={(e) => {
                                        setState({ ...state, open: true });
                                    }}
                                    inputProps={{
                                        autoFocus: state.open,
                                        className: "pb-0 pt-0",
                                    }}
                                    value={!selectedItm && !state.open ? "" : state.inputValue}
                                    className={clsx(
                                        `flex-grow-1 ${classes.input}`,
                                        !startAdornment && !selectedItem && "pl-2",
                                        startAdornment && !selectedItem && "pl-2",
                                        selectedItem && "pl-2"
                                    )}
                                />
                                {showAddButton ?
                                    <IconButton onClick={props.onAddButtonClick} className="pr-2" color="primary">
                                        <span className="material-icons">
                                            add
                                        </span>
                                    </IconButton>
                                    : null}
                                {!disabled ? (
                                    selectedItem && data && data.length === 1 ? null : (
                                        <Icon className="pr-2" color="">
                                            {placement && placement.indexOf("right") >= 0 ? (
                                                <React.Fragment>
                                                    {open ? (
                                                        <span className="material-icons">
                                                            keyboard_arrow_left
                                                        </span>
                                                    ) : (
                                                        <span className="material-icons">
                                                            keyboard_arrow_right
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ) : iconSrc ?
                                                <div className="d-flex align-items-center">
                                                    <img src={iconSrc} width='20px' alt="icon" />
                                                </div> : (
                                                    <React.Fragment>
                                                        {open ? (
                                                            <span className="material-icons">
                                                                keyboard_arrow_up
                                                            </span>
                                                        ) : (
                                                            <span className="material-icons">
                                                                keyboard_arrow_down
                                                            </span>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                        </Icon>
                                    )
                                ) : null}
                            </div>

                            {data && data.length > 0 ? (
                                <Popper
                                    {...getListboxProps()}
                                    open={open}
                                    anchorEl={state.anchorELe}
                                    placement={placement ? placement : "bottom"}
                                    className={clsx(classes.listbox)}
                                    style={{
                                        width: state.autoCompleteWidth,
                                    }}
                                >
                                    <Paper
                                        //className={clsx(classes.dropDownStyle)}
                                        elevation={0}
                                        {...getListboxProps()}>
                                        {groupedOptions &&
                                            groupedOptions.map((option, index) => (
                                                <React.Fragment key={index}>
                                                    <li
                                                        className={clsx(
                                                            classes.listItem,
                                                            selectedItm &&
                                                            selectedItm.value === option.value &&
                                                            classes.selectedListItem
                                                        )}
                                                        {...getOptionProps({ option, index })}
                                                    //onTouchEndCapture={(e) => onMobileChange(e, option)}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            {option.img ? (
                                                                <Paper className="svg-logo " elevation={3}>
                                                                    <img
                                                                        src={`${process.env.PUBLIC_URL}/assets/images/${option.img}`}
                                                                        className="svg-logo"
                                                                    />
                                                                </Paper>
                                                            ) : null}
                                                            {option.svgLogo ? (
                                                                <Paper className="svg-logo" elevation={3}>
                                                                    <Avatar
                                                                        alt={""}
                                                                        className="svg-logo"
                                                                        src={option.svgLogo}
                                                                    />
                                                                </Paper>
                                                            ) : null}
                                                            <div className="w-100 d-flex justify-content-between align-items-center">
                                                                <div className="pl-1 d-flex flex-column w-100 pr-2">
                                                                    <div>
                                                                        <Typography className={classes.optionsStyle}>
                                                                            {option.name}
                                                                        </Typography>
                                                                    </div>

                                                                    <div>
                                                                        <Typography className={classes.optionsStyle}>
                                                                            {option.description1}
                                                                        </Typography>
                                                                    </div>
                                                                    <div>
                                                                        <Typography className={classes.optionsStyle}>
                                                                            {option.description2}
                                                                        </Typography>
                                                                    </div>
                                                                </div>
                                                                {selectedItm &&
                                                                    selectedItm.value == option.value ? (
                                                                    <div>
                                                                        <Icon>
                                                                            <i className="fa fa-check text-success"></i>
                                                                        </Icon>
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </React.Fragment>
                                            ))}
                                    </Paper>
                                </Popper>
                            ) : null}
                        </div>
                    </ClickAwayListener>
                ) :
                    <Paper className={clsx(classes.dropDownStyle)}>
                        <div className=" text-muted d-flex justify-content-center p-2">
                            <Typography>No Data Found</Typography>
                        </div>
                    </Paper>
                }
            </div>
        </React.Fragment>
    );
}
//name , value , img
