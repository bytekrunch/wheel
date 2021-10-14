import React, { useState, useEffect } from "react";

import { Search, BurgerMenu } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";
import { Input } from "neetoui/v2";
import { Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";
import { Container } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import NotesMenuBar from "components/Common/Navbar/Menubar";

import NoteCard from "./Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        <NotesMenuBar />
        <Container>
          <Header
            className="px-3"
            actionBlock={
              <>
                <Input
                  placeholder="Search name, Email, Phone Number etc"
                  className="flex flex-row w-72 h-8 m-2"
                  size="small"
                  prefix={<Search size={16} />}
                />
                <Button
                  ClassName="mr-3 h-8"
                  label="Add Note +"
                  onClick={() => setShowNewNotePane(true)}
                />
              </>
            }
            menuBarHandle={
              <Button
                icon={function noRefCheck() {
                  return <BurgerMenu />;
                }}
                style="text"
              />
            }
            title="All Notes"
          />

          {notes.length ? (
            <>
              {/* <SubHeader
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              clear: () => setSearchTerm("")
            }}
            deleteButtonProps={{
              onClick: () => setShowDeleteAlert(true),
              disabled: !selectedNoteIds.length
            }}
          /> */}
              <NoteCard
                selectedNoteIds={selectedNoteIds}
                setSelectedNoteIds={setSelectedNoteIds}
                notes={notes}
                setShowDeleteAlert={setShowDeleteAlert}
              />
            </>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => setShowNewNotePane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewNotePane
            showPane={showNewNotePane}
            setShowPane={setShowNewNotePane}
            fetchNotes={fetchNotes}
          />
          {showDeleteAlert && (
            <DeleteAlert
              selectedNoteIds={selectedNoteIds}
              onClose={() => setShowDeleteAlert(false)}
              refetch={fetchNotes}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Notes;
