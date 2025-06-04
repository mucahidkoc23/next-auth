'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';

import Highlight from '../../components/Highlight';

export default function Profile() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <>
          <Row className="profile-header mb-5 ml-4" data-testid="profile">
            <Col>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture"
                  style={{ width: '80px', height: '80px', marginRight: '16px' }}
                  decode="async"
                  data-testid="profile-picture"
                />
                <div>
                  <h2 data-testid="profile-name">{user.name}</h2>
                  <p className="lead text-muted" data-testid="profile-email">
                    {user.email}
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row data-testid="profile-json" className="ml-4">
            <Highlight className="w-100">{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
        </>
      )}
    </>
  );
}
