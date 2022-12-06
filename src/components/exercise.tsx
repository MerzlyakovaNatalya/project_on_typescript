import React, { useState } from 'react'

interface Param {
  id: number;
  name: string;
  type: "string";
}
interface ParamValue {
  paramId: number;
  value: string;
}
  interface Model {
   paramValues: ParamValue[];
  }
  interface Props {
      params: Param[];
      model: Model;
  }
  interface State {
    value: string;
    getChangeValue: Function;
}
//  class ParamEditor extends React.Component<Props, State> {
//      public getModel(): Model {
//      }
//  }


export const Layout: React.FC = () => {

  const [value, setValue] = useState("");

  const getChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const params: Param[] = [
    {
      id: 1,
      name: "Назначение",
      type: "string",
    },
    {
      id: 2,
      name: "Длина",
      type: "string",
    },
  ];
  const paramValue: ParamValue[] = [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ];
  const model: Model = {
    paramValues: paramValue
  }
  
  return <ParamEditor params={params} model={model}/>
};


const ParamEditor: React.FC<Props> = ({params, model}) => {

  return <>
  {params.map((item) => {
    const inputValue: any = model.paramValues.find((i) => i.paramId === item.id);
    return (
      <div key={item.id}>
        <label>
          {item.name} <input 
          type="text" 
          value={inputValue.value} />
        </label>
      </div>
    );
  })}
</>
}
