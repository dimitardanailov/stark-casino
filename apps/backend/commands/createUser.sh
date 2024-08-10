curl -X POST http://localhost:8000/users \
-H "Content-Type: application/json" \
-d '{
  "firstName": "Stan",
  "lastName": "Lee",
  "email": "stan@marvel.com"
}'