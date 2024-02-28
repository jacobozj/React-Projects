import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="GadzhiImanAr" name="Iman Gadzhi"/>
            <TwitterFollowCard userName="jacobozj" name="Jacobo Zuluaga"/>
            <TwitterFollowCard userName="midudev" name="Miguél Ángel Durán"/>
            <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
        
        </section>
    )
}