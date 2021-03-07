
const Quotes = (props) => {
    let id = props.id
    return( 

    <div>
    <a id={id} className={id === props.quote && props.state.down1Name ? 'btn' : 'noDisp'} href={props.state.down1} rel="noreferrer" >{props.state.down1Name}</a>
    <a id={id} className={id === props.quote && props.state.down2Name  ? 'btn' : 'noDisp'} href={props.state.down2} rel="noreferrer" >{props.state.down2Name}</a>
    <a id={id} className={id === props.quote && props.state.down3Name  ? 'btn' : 'noDisp'} href={props.state.down3} rel="noreferrer" >{props.state.down3Name}</a>
    <a id={id} className={id === props.quote && props.state.down4Name  ? 'btn' : 'noDisp'} href={props.state.down4} rel="noreferrer" >{props.state.down4Name}</a>
    <a id={id} className={id === props.quote && props.state.down5Name  ? 'btn' : 'noDisp'} href={props.state.down5} rel="noreferrer" >{props.state.down5Name}</a>
    <a id={id} className={id === props.quote && props.state.opp2Name   ? 'btn' : 'noDisp'} href={props.state.opp2} rel="noreferrer" >{props.state.opp2Name}</a>
    </div>
    )
};

export default Quotes;


/*
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}


*/