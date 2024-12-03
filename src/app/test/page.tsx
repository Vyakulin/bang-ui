import { Button, Color, Style, Text, InputText } from "@/components/Atoms/atoms";
import './style.scss';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
   <div className="test">
    <div className="section">
      <h1 className={Text.h1}>Header1</h1>
      <h2 className={Text.h2}>Header2</h2>
      <h3 className={Text.h3}>Header3</h3>
      <p className={Text.p}>Paragraph</p>
      <p className={Text.sm}>Small</p>
    </div>
    <div className="section">
      <h1 className="h1">Buttons</h1>
      <div className="elements">
        <div className="white">
          <Button style={Style.bg} color={Color.w}>
            Button<HiCheck />
          </Button>
          <Button style={Style.bg} color={Color.w2}>
            Button<HiCheck />
          </Button>
          <Button style={Style.bg} color={Color.a}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.w}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.w2}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.a}>
            Button<HiCheck />
          </Button>
        </div>
        <div className="black">
          <Button style={Style.bg} color={Color.b}>
            Button<HiCheck />
          </Button>
          <Button style={Style.bg} color={Color.b2}>
            Button<HiCheck />
          </Button>
          <Button style={Style.bg} color={Color.a}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.b}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.b2}>
            Button<HiCheck />
          </Button>
          <Button style={Style.ol} color={Color.a}>
            Button<HiCheck />
          </Button>
        </div>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Inputs</h1>
      <div className="elements">
        <div className="white">
          <InputText style={Style.bg} color={Color.w} p={{ icon: <HiCheck />, name: 'test'}}>
            Input
          </InputText>
        </div>
        <div className="black">
          <InputText style={Style.bg} color={Color.b} p={{ icon: <HiCheck />, name: 'test'}}>
            Input
          </InputText>
        </div>
      </div>
    </div>
   </div>
  );
}