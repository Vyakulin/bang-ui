import { Button, InputText, InputPassword, Checkbox, Radio } from "@/components/Atoms/atoms";
import './style.scss';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
   <div className="test">
    <div className="section">
      <h1 className='h1'>Header1</h1>
      <h2 className='h2'>Header2</h2>
      <h3 className='h3'>Header3</h3>
      <p className='p'>Paragraph</p>
      <p className='sm'>Small</p>
    </div>
    <div className="section">
      <h1 className="h1">Buttons</h1>
      <div className="elements">
        <Button style="bg" color="w">Button<HiCheck /></Button>
        <Button style="bg" color="a">Button<HiCheck /></Button>
      </div>
      <div className="elements">
        <Button style="ol" color="w">Button<HiCheck /></Button>
        <Button style="ol" color="a">Button<HiCheck /></Button>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Inputs</h1>
      <div className="elements">
        <InputPassword style="bg">Password</InputPassword>
        <InputPassword style="ol">Password</InputPassword>
      </div>
      <div className="elements">
        <InputPassword style="bg" hint>PasswordHint</InputPassword>
        <InputPassword style="ol" hint>PasswordHint</InputPassword>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Checkboxes</h1>
      <Checkbox style='bg'/>
      <Checkbox style='ol'/>
      <Radio style='bg' name="test"/>
      <Radio style='ol' name="test"/>
    </div>
   </div>
  );
}