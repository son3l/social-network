interface PropsType{
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string
    }
}
export const Contacts = (props: PropsType) => {
    return (<>
            <div>Contacts:</div>
            <table>
                <tr>
                    {
                        props.contacts.github &&
                        <a href={props.contacts.github}>github</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.vk &&
                        <a href={props.contacts.vk}>vk</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.facebook &&
                        <a href={props.contacts.facebook}>facebook</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.instagram &&
                        <a href={props.contacts.instagram}>instagram</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.twitter &&
                        <a href={props.contacts.twitter}>twitter</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.website &&
                        <a href={props.contacts.website}>website</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.youtube &&
                        <a href={props.contacts.youtube}>youtube</a>
                    }
                </tr>
                <tr>
                    {
                        props.contacts.mainLink &&
                        <a href={props.contacts.mainLink}>mainLink</a>
                    }
                </tr>
            </table>
        </>
    )
}