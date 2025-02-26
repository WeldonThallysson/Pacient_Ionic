import { useGetAllUsers, useGetDetailsUsers } from "../../services/users"
import { useToastStore } from "../../store/toastMessage"
import { useUserStore } from "../../store/users"


export const useActionsUsers = () => {
    const {mutate: getAllUsers } = useGetAllUsers()
    const {mutate: getDetailsAllUsers } = useGetDetailsUsers()
    const { users, detailsUser, handleDetailsUser, handleUsers} = useUserStore()
    const { handleShowToast, handleToastMessage} = useToastStore()
    
    const handleGetAllUsers = () => {
        getAllUsers(undefined, ({
            onSuccess: (res) => {
                handleUsers(res)
            },
            onError: (err) => {
                handleShowToast(true)
                handleToastMessage(`Ocorreu um erro na busca por todos os usuários ${err}`)
            }
        }))
    } 

    const handleGetDetailsUsers = (params: {id: string}) => {
        getDetailsAllUsers(params, ({
            onSuccess: (res) => {
                handleDetailsUser(res)
            },
            onError: (err) => {
                handleShowToast(true)
                handleToastMessage(`Ocorreu um erro na busca por detalhes do usuário ${err}`)
            }
        }))
    } 


    

    return {
        users,
        detailsUser,
        handleGetAllUsers,
        handleGetDetailsUsers,
        
    }

} 