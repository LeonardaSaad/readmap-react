//  Components
import Header from "../components/Header";
import ConditionalRender from "../components/pageOne/ConditionalRender";
import MapAndKey from "../components/pageOne/MapAndKey";
import State from "../components/pageOne/State";
import CompositionVsInheritance from "../components/pageOne/CompositionVsInheritance";
import OnClick from "../components/pageOne/OnClick";

//  Hooks
import HookUseState from "../components/pageOne/HookUseState";
import HookUseEffect from "../components/pageOne/HookUseEffect";

// Others
import Refs from "../components/pageOne/Refs";
import HookUseCallback from "../components/pageOne/HookUseCallback";
import HookUseRef from "../components/pageOne/HookUseRef";
import HookUseMemo from "../components/pageOne/HookUseMemo";
import TesteDoido from "../components/TesteDoido";


const PageOne = () => {
  return (
    <div className="main">
      <Header />
      <div className="main__line">
        <State />
        <ConditionalRender />
        <MapAndKey />
      </div>
      <div className="main__line">
        <CompositionVsInheritance />
        <HookUseState />
        <HookUseEffect />
      </div>
      <div className="main__line">
        <OnClick />
        <Refs />
        <HookUseCallback />
      </div>
      <div className="main__line">
        <HookUseRef />
        <HookUseMemo />
        <TesteDoido />
      </div>
    </div>
  )
}

export default PageOne