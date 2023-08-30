import mysql.connector
db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='Password1!')

cursorObject = db.cursor()
cursorObject.execute("CREATE DATABASE catalogue")
print("All Done") 