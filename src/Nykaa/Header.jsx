import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './Header.css'

function Header() {

  
  return (
    <div>
        <MDBNavbar expand='lg' light bgColor='light' className='paddinglr'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAflBMVEX///8dHRsAAAAMDAisrKx8fHyvr67d3dwPDwwTExFubm7v7+7s7OxaWlkZGRcbGxn29va5ublgYF/Hx8eVlZTY2NiGhoXR0dHl5eUyMjBLS0o6OjklJSOgoJ9ra2qamppBQUBUVFPAwMBISEc9PTwnJyZ3d3eNjY2AgH9dXVyLvebAAAAEaElEQVR4nO3Z6XayOhiGYXlxAK2RySpqtdXa1vM/wR0wDE4VhH7tWvu+frUuCeTJSOx0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+lQTQcRtOGhUyTQgZVvz2KXkV2L17t28xnW7/fwLb+LU9EIo4j8uo3KMN/PRbyWenb8w8R17JckedRjZsMNgtpLnyshkeeWCn96FGdRy+MorTuCalQwnwotmXY0nuqeJd+nN+lCSUP1TGrqmTlTETWs9rXz9Yik6wIuVv1QSDO8amViWs4r3AX3xHVPKm0krVrWJKGpUxbOxL3a12t2/tYd8tWFcKavZmvu/Iam+o7sr471wVZe7j2rw7DJCy1eBbz6EpPJFWaOjE/uWqh7oUVLsxA0lHpZ/Zj868jh2/XF29vm14oi69Ntwm/2QSfhOWOO97LKpsSbBlXiT8cZ3OPK5Ze2A7u92GF73lUCzPat8uLj65ZucfH+mjUK9pgwtLCt6L2qzvLuvdinWc7LoXVDeL4cFLEtuhG41I3Cncnna14qugtjtfHKeFgp3PNV8NVvw1FWGfj6uv2TDLoXRm1RVieI65SennN+5m/yieo4KxYPY1lcS23+Q0kKUHPoPrvbTqpSv2l5weUw9K6xYwti+3VK7Y7KdaDbv5xEVZoFlgxW7fuRL5b+qaHbIGU2FyxyUrQX18q88cfcBaWbupA7Ilpa3dz3ve9jW16gt5pBOXmLg3D6LjwPKf/vNh5VLc2VYO1iV/J6jj0hscSdFPMpRT7b7sIq9N5+sxGmQ5kWF6opsNsU6XH3+fpDrQ8Z3XCfjdMc95kF3y/Xdeb+iwuJ+2so223nzZFXz/fxGpay5ZcCUvzl9lodOQ9a9Z+6cPlRVuPL1dDLyqi+rwzPz/1TFy6gV5Knycj0vmoXa2fcT2scidy06e/3d2Mi7A8vVxkF2yqPEpk1lf9/aj4UJdhf9Wt1Q+5FVY2PSUvQdNOeCgmMudiIkudhTX6Oukpm/Xwrt4he/mbFD2xm2yalz9Q8UfcDkvzd7pTeJ3uvthU3Vgiz8IqzUFu15xs3Fd+Uc7muGk6wTc9QWrJt2HphaozL2+qerc3X6WwSqub1S+GY01m9XR1j1artqv9mDth6S/ozbqtJspOX2puy8OaBuV906hXnMjUj0vvy5JxaDnLP7B/rxCWFn7EbnzvzSwNa1Q+WNA78kHw6OlAfiQx36m0tL+w1aoSViVpWP7pwULn4f5QOpJYpivLROL+r/euVsOy8qjeGr/L5acU2dGinjIXn/5sOmig4VtTu2GZzjBuZfWa7c4Pkpuf/cVVj7Gvaj2sKiefVeUToO5Xj64Sp5xG62rLYVU8U68sW1rVeyu/V+iJosnTeOIqObRQrUCUqvFrTWVzvWlTSr8A9cfJOLKbqfbiddN2uQraqOEoWO1r/Q5Y2by33x/fDqf+5rnXxPOfOEMEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/r3/ALmlP9ixI5iPAAAAAElFTkSuQmCC" 
        alt="" style={{height:100}}/></MDBNavbarBrand>

       

        <MDBCollapse navbar >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem> */}
            

           

            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Lip sticks etc' aria-label='Search' />
            <MDBBtn color='dark'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header