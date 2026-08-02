(() => {
  'use strict';
  const ACCOUNTS = {
    'admin@sma.sch.id': { password:'admin123', role:'admin', name:'Admin Sekolah', dashboard:'admin/dashboard.html' },
    'kepala@sma.sch.id': { password:'kepala123', role:'kepala', name:'Drs. Arif Pranoto', dashboard:'kepala/dashboard.html' },
    'guru@sma.sch.id': { password:'guru123', role:'guru', name:'Ibu Rina Kusuma', dashboard:'guru/dashboard.html' },
    'siswa@sma.sch.id': { password:'siswa123', role:'siswa', name:'Nadia Putri', dashboard:'siswa/dashboard.html' },
    'ortu@sma.sch.id': { password:'ortu123', role:'orang-tua', name:'Orang Tua Nadia', dashboard:'orang-tua/dashboard.html' }
  };
  const KEY='smaNCSession';
  const root=location.pathname.replace(/[^/]*$/, '');
  const fromDashboard=/\/(admin|kepala|guru|siswa|orang-tua)\/$/.test(root);
  const base=fromDashboard?'../':'';
  const getSession=()=>{try{return JSON.parse(sessionStorage.getItem(KEY)||localStorage.getItem(KEY)||'null')}catch{return null}};
  const accountForRole=role=>Object.values(ACCOUNTS).find(a=>a.role===role);
  const goDashboard=session=>location.replace(base+accountForRole(session.role).dashboard);
  const logout=()=>{sessionStorage.removeItem(KEY);localStorage.removeItem(KEY);location.replace(base+'login.html')};
  const required=document.body.dataset.role;
  if(required){
    const session=getSession();
    if(!session || !accountForRole(session.role)){ location.replace('../login.html'); return; }
    if(session.role!==required){ goDashboard(session); return; }
    document.documentElement.classList.add('auth-ready');
    document.querySelectorAll('[data-user-name]').forEach(el=>el.textContent=session.name);
    document.querySelectorAll('[data-logout]').forEach(el=>el.addEventListener('click',logout));
  }
  const form=document.querySelector('#login-form');
  if(form){
    const current=getSession(); if(current&&accountForRole(current.role)){location.replace(accountForRole(current.role).dashboard);return}
    const email=form.querySelector('#email'), password=form.querySelector('#password'), alert=form.querySelector('#login-alert');
    const setError=(id,msg)=>{const el=form.querySelector(`[data-error-for="${id}"]`);if(el)el.textContent=msg;form.querySelector('#'+id)?.classList.toggle('invalid',!!msg)};
    form.querySelectorAll('.demo-account').forEach(btn=>btn.addEventListener('click',()=>{email.value=btn.dataset.email;password.value=btn.dataset.password;email.focus();setError('email','');setError('password','');alert.hidden=true}));
    form.addEventListener('submit',e=>{
      e.preventDefault(); const mail=email.value.trim().toLowerCase(), pass=password.value; setError('email','');setError('password','');alert.hidden=true;
      if(!mail){setError('email','Email wajib diisi.');email.focus();return}
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){setError('email','Format email belum valid.');email.focus();return}
      if(!pass){setError('password','Kata sandi wajib diisi.');password.focus();return}
      const acc=ACCOUNTS[mail];
      if(!acc||acc.password!==pass){alert.textContent='Email atau kata sandi salah. Periksa akun demo dan coba lagi.';alert.hidden=false;password.select();return}
      const session={role:acc.role,name:acc.name,email:mail,loginAt:new Date().toISOString()};
      (form.querySelector('#remember').checked?localStorage:sessionStorage).setItem(KEY,JSON.stringify(session));
      location.replace(acc.dashboard);
    });
  }
  document.querySelectorAll('[data-sidebar-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const open=document.body.classList.toggle('sidebar-open');btn.setAttribute('aria-expanded',String(open))}));
})();