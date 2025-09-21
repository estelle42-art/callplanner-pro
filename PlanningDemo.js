import React, { useEffect, useState } from 'react';

export default function PlanningDemo(){
  const [planning,setPlanning] = useState([]);

  useEffect(()=>{
    fetch((process.env.REACT_APP_API_URL||'http://localhost:4000')+'/api/planning')
      .then(r=>r.json())
      .then(data=>setPlanning(data.planning));
  },[]);

  return <div>
    <h1>Planning CallPlanner PRO - Démo</h1>
    {planning.map(u=>(
      <div key={u.unit}>
        <h2>{u.unit}</h2>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Plage Téléphone</th>
              <th>Téléphone</th>
              <th>Plage Live chat</th>
              <th>Live chat</th>
            </tr>
          </thead>
          <tbody>
            {u.shifts.map((s, idx)=>(
              <tr key={idx}>
                <td>{s.plage_telephone}</td>
                <td>{s.telephone.join(', ')}</td>
                <td>{s.plage_live}</td>
                <td>{s.live_chat.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>;
}
