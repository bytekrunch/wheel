import React, { useState, useEffect } from "react";

import { Search, BurgerMenu } from "@bigbinary/neeto-icons";
import { Input } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";
import { BrowserRouter } from "react-router-dom";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import NoteTables from "./Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  //const [searchTerm, setSearchTerm] = useState("");
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
      {/* <Header
        title="Notes"
        actionBlock={
          <Button
            onClick={() => setShowNewNotePane(true)}
            label="Add New Note"
            icon="ri-add-line"
          />
        }
      /> */}

      <BrowserRouter>
        <Header
          className="px-6"
          actionBlock={
            <>
              <Input
                placeholder="Search name, email, phone number etc"
                className="flex flex-row m-1"
                size="small"
                prefix={<Search size={16} />}
              />
              <Button
                ClassName="mr-3"
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
      </BrowserRouter>

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
          <NoteTables
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            notes={notes}
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
    </>
  );
};

export default Notes;
