import Telephone from '../../assets/Telephone.svg'; // Esse sim, pois está em src/assets
import { TelephoneImg, Container, Icons, IconLink } from './style';

function Redirect() {
    return (
        <Container>
            <TelephoneImg src={Telephone} alt="Telefone"/>
            <Icons>
                <IconLink
                    href="https://wa.me/489984847422"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                >
                    <img src="/whatsapp.svg" alt="Whatsapp" />
                </IconLink>
                <IconLink
                    href="mailto:claramanubrito@icloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                >
                    <img src="/gmail.svg" alt="Gmail" />
                </IconLink>
            </Icons>
        </Container>
    );
}

export default Redirect;