"use client";

import { ThemeProvider, BaseStyles } from '@primer/react';
import { TabNav} from '@primer/react/deprecated';
import { Button, Dialog, Text, ToggleSwitch } from '@primer/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons';

import { useState, useRef, useCallback } from "react";

import "./styles.css";

import { css } from '@emotion/react';

const color = 'white'

function RetrunTabNav() {
  return (
    <>
      <TabNav aria-label="Main">
      <TabNav.Link href="/" selected>
        <FontAwesomeIcon icon={faThumbsDown} className="fa-fw" /> Home
      </TabNav.Link>
      <TabNav.Link href="/hello">
        <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" /> Hello
        </TabNav.Link>
      <TabNav.Link href="/todos">Todos</TabNav.Link>
    </TabNav>
    </>
  );
}

function ReturnToggleSwitch() {
  return (
  <>
    <Text id="toggle" fontWeight="bold" fontSize={1}>
      Power?
    </Text>
    <ToggleSwitch aria-labelledby="toggle" />
  </>
  );
}

function ReturnDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const onDialogClose = useCallback(() => setIsOpen(false), [])
    const onSecondDialogClose = useCallback(() => setSecondOpen(false), [])
    const openSecondDialog = useCallback(() => setSecondOpen(true), [])
    return (
      <>
        <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          Show dialog
        </Button>
        {isOpen && (
          <Dialog
            title="Lazy Pizza Life"
            onClose={onDialogClose}
            footerButtons={[
              {
                buttonType: 'default',
                content: 'Are U Sure?',
                onClick: openSecondDialog,
              },
              {
                buttonType: 'danger',
                content: 'Jumpship',
                onClick: onDialogClose,
              },
              {
                buttonType: 'primary',
                content: 'Proceed',
                onClick: openSecondDialog,
              },
            ]}
          >
            "kibble and bits"
            {secondOpen && (
              <Dialog
                title="Inner dialog!"
                onClose={onSecondDialogClose}
                width="small"
              >
                OK, here we go!
              </Dialog>
            )}
          </Dialog>
        )}
      </>
    )
  };

export default function IndexPage() {
  return (
    <ThemeProvider>
      <RetrunTabNav/>
      <ReturnToggleSwitch/>
      <ReturnDialog/>
    </ThemeProvider>
  );
};