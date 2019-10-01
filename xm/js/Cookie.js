 let Cookie = {
     get(key) {
         let result = null;
         let arr = document.cookie.split("; ")
         arr.forEach((ele) => {
             let item = ele.split("=");
             if (key == item[0]) {
                 result = item[1];
             }
         })
         return result;
     },
     set(key, val, day) {
         if (day) {
             let date = new Date();
             date.setDate(date.getDate() + day);
             document.cookie = `${key}=${val};expires=${date}`;
         } else {
             document.cookie = `${key}=${val}`;
         }
     },
     remove(key) {
         this.set(key, null, -1);
     },
     clear() {
         this.keys().forEach(ele => this.remove(ele));
     },
     keys() {
         let result = [];
         let arr = document.cookie.split("; ")
         arr.forEach((ele) => {
             let item = ele.split("=");
             result.push(item[0]);
         })
         return result;
     }
 };