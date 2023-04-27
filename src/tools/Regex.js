export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
 export const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$');

 export const validName = new RegExp('^([A-Z]{1}[a-z]+[ ]?){1,2}$')