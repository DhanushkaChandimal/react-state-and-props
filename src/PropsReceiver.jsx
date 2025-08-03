
function PropsReceiver(props) {

    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </>
    )
}

// This one is not working after React version 18
PropsReceiver.defaultProps = {
    name: 'default',
    age: '2025'
}

export default PropsReceiver;
