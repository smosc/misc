# expStr.js
## Expand JS Strings

The concept esentially expands basic regex character classes




| Input        | Returns           |
| ------------- |:-------------:|
| `expStr("a-zA-Z0-9")`      | `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789` |
| `expStr("A-Z0-9$_-")`      | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_-` |
| `expStr("A-Z0-9$_-[]")`      | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_-[]` |
| `expStr("A-Z0-9$_-[Hi world! :)]")`      | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_-[ !:)]` |
