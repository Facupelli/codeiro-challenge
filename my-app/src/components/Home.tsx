import React, { useState } from "react";
import styled from "styled-components";
import { AddCandidate } from "./AddCandidate";
import { CandidateComponent } from "./Candidate";
import { Modal } from "./Modal";

const Board = styled.div`
  // background: red;
  display: grid;
  grid-template-columns: repeat(5, 18%);
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;
  min-height: 90vh;
`;

const Column = styled.div`
  background: #e9ab95;
  padding: 10px;
  min-height: 70vh;
`;

const ColumnTitle = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  background: red;
  margin: 0px;
`;

const Button = styled.button`
  background: #9c6754;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  border-style: none;
  text-align: center;
  margin-left: auto;
`;

const BottomColumn = styled.div`
  background: #ffcebd;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 10px;
`;

type State = string[];

export type CandidateState = Candidate[];

export type Candidate = {
  fullName: string;
  note: string;
  status: string;
};

export const Home: React.FC = () => {
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [deleteCandidate, setDeleteCandidate] = useState<String>('')


  const [candidates, setCandidates] = useState<CandidateState>([]);
  console.log("candidates", candidates);

  

  const hanldeAddCandidate = () => {
    setShowForm(true);
  };

  return (
    <>
      <Board>
        <Column>
          <ColumnTitle>First Interview</ColumnTitle>
          {candidates.length > 0 &&
            candidates.map((el, i) => {
              if (el.status === "First Interview") {
                return (
                  <CandidateComponent
                    key={i}
                    candidate={el}
                    candidates={candidates}
                    setCandidates={setCandidates}
                    setShowModal={setShowModal}
                    setDeleteCandidate={setDeleteCandidate}
                  />
                );
              }
            })}
        </Column>
        <Column>
          <ColumnTitle>Tecnical Interview</ColumnTitle>
          {candidates.length > 0 &&
            candidates.map((el, i) => {
              if (el.status === "Tecnical Interview") {
                return (
                  <CandidateComponent
                    key={i}
                    candidate={el}
                    candidates={candidates}
                    setCandidates={setCandidates}
                    setShowModal={setShowModal}
                    setDeleteCandidate={setDeleteCandidate}
                  />
                );
              }
            })}
        </Column>
        <Column>
          <ColumnTitle>Offer</ColumnTitle>
          {candidates.length > 0 &&
            candidates.map((el, i) => {
              if (el.status === "Offer") {
                return (
                  <CandidateComponent
                    key={i}
                    candidate={el}
                    candidates={candidates}
                    setCandidates={setCandidates}
                    setShowModal={setShowModal}
                    setDeleteCandidate={setDeleteCandidate}
                  />
                );
              }
            })}
        </Column>
        <Column>
          <ColumnTitle>Assignment</ColumnTitle>
          {candidates.length > 0 &&
            candidates.map((el, i) => {
              if (el.status === "Assignment") {
                return (
                  <CandidateComponent
                    key={i}
                    candidate={el}
                    candidates={candidates}
                    setCandidates={setCandidates}
                    setShowModal={setShowModal}
                    setDeleteCandidate={setDeleteCandidate}
                  />
                );
              }
            })}
        </Column>
        <Column>
          <ColumnTitle>Rejection</ColumnTitle>
          {candidates.length > 0 &&
            candidates.map((el, i) => {
              if (el.status === "Rejection") {
                return (
                  <CandidateComponent
                    key={i}
                    candidate={el}
                    candidates={candidates}
                    setCandidates={setCandidates}
                    setShowModal={setShowModal}
                    setDeleteCandidate={setDeleteCandidate}
                  />
                );
              }
            })}
        </Column>
        <BottomColumn>
          <Button onClick={hanldeAddCandidate}>Add Candidate</Button>
        </BottomColumn>
      </Board>
      {showForm && (
        <AddCandidate
          setShowForm={setShowForm}
          setCandidates={setCandidates}
          candidates={candidates}
        />
      )}
      {showModal && (
        <Modal setShowModal={setShowModal} candidates={candidates} setCandidates={setCandidates}  deleteCandidate={deleteCandidate} />
      )}
    </>
  );
};
