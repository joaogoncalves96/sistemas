import { useState } from "react"
import Title from "../../components/Title"
import Header from "../../components/Header"
import { FiUser } from "react-icons/fi"
import firebase from "../../services/firebaseConnection"
import { toast } from "react-toastify"

export default function Customers() {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [enderenço, setEnderenço] = useState('');

    const handleAdd = async (e) => {
        e.preventDefault();
        
        if(nomeFantasia !== '' && cnpj !== '' && enderenço !== '') {
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                enderenço: enderenço
            })
            .then(() => {
                setNomeFantasia('');
                setCnpj('');
                setEnderenço('');
                toast.info('Empresa cadastrada com sucesso');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error ao cadastrar essa empresa')
            })
        } else {
            toast.error('Preenche corretamente todos os dados')
        }
    }

    return (
        <div>
            <Header />
            <div className="content">
            <Title name="Clientes">
                <FiUser size={25} />
            </Title>
            <div className="container">
            <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome fantasia</label>
            <input type="text" placeholder="Nome da sua empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)}/>
            <label>CNPJ</label>
            <input type="text" placeholder="Seu CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
            <label>Endereço</label>
            <input type="text" placeholder="Seu endereço" value={enderenço} onChange={(e) => setEnderenço(e.target.value)}/>
            <button type="submit">Cadastrar</button>
            </form>
            </div>
            </div>
        </div>
    )
}