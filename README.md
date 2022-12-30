# geektrust-admin-ui

Coding Challenge: https://www.geektrust.com/coding/detailed/admin-ui

## Requirements as part of the coding challenge:

You work at a startup that is building an interface for admins to see and delete users. The users will be provided via an API. Your job is to build out a working UI. See image below for reference.

1. Column titles must stand out from the entries.
2. There should be a search bar that can filter on any property.
3. You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

## API used:

Users API to list all the users and their properties.
Note :
The users are sorted by `id` field. There is no alphabetical sorting.

Request Type :
GET

Endpoint :
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
Sample Response :

                    [

{
"id": "1",
"name": "Aaron Miles",
"email": "aaron@mailinator.com",
"role": "member"
},
{
"id": "2",
"name": "Aishwarya Naik",
"email": "aishwarya@mailinator.com",
"role": "member"
},
{
"id": "3",
"name": "Arvind Kumar",
"email": "arvind@mailinator.com",
"role": "admin"
}
]

# UI & Functionality Implemented:

1. Search bar: can filter using name, email or role.
2. Data table displayed: to manage users: view, edit, delete users.
3. Delete functionality: can delete individual users or do bulk delete by selecting all or some users from table.
4. Edit Users: can edit user details in-place.
5. Pagination done: to see & navigate to individual pages, next page, previous page, last page & first page.
6. Stack: HTML, CSS, JavaScript, REACTJS
