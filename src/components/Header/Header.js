import React, { useContext } from 'react'
import ColorsContext from '../../providers/colors/ColorsContext'
import styles from './Header.module.scss'
import { ReactComponent as UnlockedIcon } from '../../assets/unlocked.svg'
import { ReactComponent as UndoIcon } from '../../assets/undo.svg'
import { ReactComponent as RedoIcon } from '../../assets/redo.svg'

const Header = () => {
    const { unlockAllColors, undo, redo, canRedo, canUndo } = useContext(
        ColorsContext,
    )

    return (
        <header className={styles.Header}>
            <p className={styles.Text}>
                Press the spacebar to generate the new scheme!
            </p>
            <div>
                <UndoIcon
                    onClick={undo}
                    className={`${styles.Undo} ${!canUndo &&
                        styles.DisabledIcon}`}
                />
                <RedoIcon
                    onClick={redo}
                    className={`${styles.Redo} ${!canRedo &&
                        styles.DisabledIcon}`}
                />
                <UnlockedIcon
                    onClick={() => unlockAllColors()}
                    className={styles.UnlockAll}
                />
            </div>
        </header>
    )
}

export default React.memo(Header)
