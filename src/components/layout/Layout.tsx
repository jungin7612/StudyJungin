
import Mainnav from "./Mainnav";

function Layout(props : any) {
  return (
    <div>
        <main>
          <Mainnav/>
          {props.children}
        </main>
    </div>
  );
}

export default Layout;