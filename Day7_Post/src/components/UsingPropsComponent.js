export default function UsingPropsComponent(props) {
    debugger;
    //props.userOtherName = "Random Name";
    props.details.userName = "Updated Value"
    return <h1>Hello {props.details.userName}...</h1>
}