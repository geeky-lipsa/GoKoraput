import { Link, useLocation } from "react-router-dom"
import './breadcrumb.css'
export default function Breadcrumb() {
    const location= useLocation()

    let currentLink = ''
    const crumbs=location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb =>{
            currentLink += `/${crumb}`
            return(
    <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb.replaceAll('%20', ' ')}</Link>
            </div>
            )
        })
  return (
    <div className="breadcrumb">
        <div className="crumb">
        <Link to ="/">GoKoraput</Link>
        </div>
        {crumbs}
        </div>
   
  )
}
