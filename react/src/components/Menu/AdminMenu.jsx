import {useNavigate} from 'react-router-dom'
import MenuButton from '../ui/MenuButton'
import {useState} from 'react'
import { getMenuList } from '../../utils/menuHelpers';


function AdminMenu ({children,menuLevel=1,parentMenu=''}){

    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState(null);
    

    const adminPath = '/admin/event/'

    const menuItems = [
        //add an event
        {id: 'addEvent',
        label : 'Ajouter un évènement',
        path: adminPath+'addevent',
        section :1,
        requireAuth: true,
        requireRole : 'admin',
        MenuLevel: 1,
        parentMenu:''
        },
        //Pick event
        {id: 'pickEvent',
        label : 'Selectionner un évènement',
        path: adminPath +'pickevent',
        section:1,
        requireAuth: true,
        requireRole: 'admin',
        menuLevel: 1,
        parentMenu:''
        },
        //Manage Event
        {id: 'manageEvent',
        label : 'Gérer l\'évènement',
        path: adminPath +'manageevent',
        section:1,
        requireAuth: true,
        requireRole: 'admin',
        menuLevel: 1,
        parentMenu:''
        },
        //Edit event
        {id: 'editEvent',
        label : 'Modifier l\'évènement',
        path: adminPath+'manageevent/editevent',
        section :1,
        requireAuth: true,
        requireRole : 'admin',
        menuLevel: 2,
        parentMenu:'manageEvent'
        },
        //Manage Shop
        {id: 'manageShop',
        label : 'Gérer la billeterie',
        path:adminPath +'manageevent/manageshop',
        section:1,
        requireAuth: true,
        requireRole: 'admin',
        menuLevel: 2,
        parentMenu:'manageEvent'
        },
        //Add shop item
        {id: 'addShopItem',
        label : 'Ajouter un objet au shop',
        path: adminPath+'/shop/addobject',
        section :1,
        requireAuth: true,
        requireRole : 'admin',
        menuLevel: 2,
        parentMenu:'manageShop'
        },
        //Manage event groups
        {id: 'manageEventGroup',
        label : 'Gérer les groups',
        path: adminPath+'manageevent/managegroups',
        section :1,
        requireAuth: true,
        requireRole : 'admin',
        menuLevel: 2,
        parentMenu:'manageEvent'
        },
        //Manage Attendees
        {id: 'manageAttendees',
        label : 'Gérer les participants',
        path: adminPath +'manageevent/attendee',
        section:1,
        requireAuth: true,
        requireRole: 'admin',
        menuLevel: 2,
        parentMenu:'manageEvent'
        },
        //Manage users
        {id: 'manageUsers',
        label : 'Gérer les utilisateurs',
        path: '/admin/user/manageuser',
        section :1,
        requireAuth: true,
        requireRole : 'admin',
        menuLevel: 1,
        parentMenu:''
        },
        
    ]

    const menuFiltered = getMenuList(menuItems,menuLevel,parentMenu)
    

    return(

        <div className='m-4'>
            <nav className="flex flex-row justify-around bg-violet-300">
            {
                menuFiltered.map((item) => (
                    <MenuButton
                    section = {item.section}
                    key = {item.id}
                    onClick={() => {
                        setSelectedMenu(item.id);
                        navigate(item.path);
                    }}
                    isActive={selectedMenu === item.id}
                    label={item.label}
                    className='border-2 border-gray-900 grow'
                />
                ))
            }
            </nav>

        {children}
        </div>
    )

}
export default AdminMenu